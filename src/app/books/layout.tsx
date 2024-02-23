import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reading List',
}

export default function ReadingListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}