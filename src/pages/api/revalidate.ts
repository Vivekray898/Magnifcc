---
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
    const pathsToRevalidate = [];
    
    // Always revalidate the services list page
    pathsToRevalidate.push('/services');
    
    // If we have a slug, revalidate that specific service page
    if (slug) {
      pathsToRevalidate.push(`/services/${slug}`);
    }
    
    // If it's a blog post, revalidate blog pages
    if (docType === 'blogPost') {
      pathsToRevalidate.push('/blog');
      if (slug) {
        pathsToRevalidate.push(`/blog/${slug}`);
      }
    }
    
    // If it's a home page update, revalidate home
    if (docType === 'homePage') {
      pathsToRevalidate.push('/');
    }
    
    console.log('📋 Paths to revalidate:', pathsToRevalidate);
    
    // For Vercel deployment, use the Vercel API
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
    
    // Return success response
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