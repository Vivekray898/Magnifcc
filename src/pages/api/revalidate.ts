// src/pages/api/revalidate.ts

import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Verify webhook secret
    const secret = request.headers.get('x-webhook-secret');
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Unauthorized' 
      }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get the slug and type from the webhook payload
    const slug = body?.slug?.current || body?.slug;
    const docType = body?._type;
    
    console.log('🔍 Revalidation triggered for:', { slug, docType });
    
    // Determine which paths to revalidate
    const pathsToRevalidate: string[] = [];
    
    // Services paths
    if (docType === 'servicesDetails') {
      pathsToRevalidate.push('/services');
      if (slug) {
        pathsToRevalidate.push(`/services/${slug}`);
      }
    }
    
    // Blog paths
    if (docType === 'blogPost') {
      pathsToRevalidate.push('/blog');
      if (slug) {
        pathsToRevalidate.push(`/blog/${slug}`);
      }
    }
    
    // Home page (for blog section updates)
    if (docType === 'blogPost' || docType === 'homePage') {
      pathsToRevalidate.push('/');
    }
    
    console.log('📋 Paths to revalidate:', pathsToRevalidate);
    
    // For Vercel deployment
    if (process.env.VERCEL_URL) {
      const vercelToken = process.env.VERCEL_REVALIDATE_TOKEN;
      
      if (vercelToken) {
        for (const path of pathsToRevalidate) {
          try {
            const revalidateUrl = `https://api.vercel.com/v1/projects/${process.env.VERCEL_PROJECT_ID}/revalidate`;
            const response = await fetch(revalidateUrl, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${vercelToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                paths: [path],
                revalidate: true,
              }),
            });
            
            console.log(`✅ Revalidated ${path}:`, response.status);
          } catch (error) {
            console.error(`❌ Failed to revalidate ${path}:`, error);
          }
        }
      }
    }
    
    return new Response(JSON.stringify({
      success: true,
      revalidated: true,
      paths: pathsToRevalidate,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('❌ Revalidation error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Internal Server Error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};