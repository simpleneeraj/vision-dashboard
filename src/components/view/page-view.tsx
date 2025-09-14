import React from 'react';

type PageViewProps = {} & React.PropsWithChildren;

const PageView: React.FC<PageViewProps> = ({ children }) => {
  return (
    <section className="container flex flex-col gap-4 sm:max-w-3xl mx-auto py-4 sm:py-8">
      {children}
    </section>
  );
};

export default PageView;
