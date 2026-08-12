// sanity/components/CreateableReferenceInput.tsx

import React, { useState } from 'react';
import { 
  ReferenceInput, 
  type ReferenceInputProps,
} from 'sanity';
import { Button, Stack } from '@sanity/ui';
import { PlusIcon } from '@sanity/icons';

export function CreateableReferenceInput(props: ReferenceInputProps) {
  const { schemaType } = props;
  const [isCreating, setIsCreating] = useState(false);
  
  // Handle create new - this opens the create dialog
  const handleCreateNew = () => {
    setIsCreating(true);
    // The actual create functionality is handled by Sanity's built-in mechanisms
    // We just need to trigger the dialog
    const createButton = document.querySelector('[data-testid="create-new-button"]');
    if (createButton) {
      (createButton as HTMLButtonElement).click();
    } else {
      // Fallback: Look for any create button in the reference input
      const buttons = document.querySelectorAll('button');
      for (const btn of buttons) {
        if (btn.textContent?.toLowerCase().includes('create')) {
          btn.click();
          break;
        }
      }
    }
  };

  return (
    <Stack space={3}>
      {/* The reference input */}
      <ReferenceInput {...props} />
      
      {/* Always visible "Create new" button */}
      <Button
        mode="ghost"
        tone="primary"
        icon={PlusIcon}
        text={`Create new ${schemaType.title}`}
        onClick={handleCreateNew}
        style={{ width: '100%', justifyContent: 'center' }}
      />
    </Stack>
  );
}