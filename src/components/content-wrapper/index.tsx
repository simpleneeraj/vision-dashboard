import React from 'react';
import { cn } from '@heroui/theme';

type ContentWrapperProps = React.ComponentPropsWithoutRef<'div'>;

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col prose-sm base',
        'dark:prose-invert prose-p:text-default-600 prose-h2:font-semibold prose-ul:list-disc prose-ul:list-inside',
        // For Blockquete
        'prose-blockquote:p-4 prose-blockquote:text-default-700 prose-blockquote:bg-default-50 prose-blockquote:border-l-2 prose-blockquote:border-l-default-500 prose-blockquote:rounded-r-2xl prose-blockquote:rounded-tr-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
