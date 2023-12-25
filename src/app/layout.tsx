import { type Metadata } from 'next'
import Head from 'next/head'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Tyler Wolfe',
    default:
      'Tyler Wolfe - Software engineer, founder, and aspiring elite runner',
  },
  description:
    'I’m Tyler, a software engineer and entrepreneur based in the San Francisco Bay area. I’m the founding engineer of More Research Needed, where we develop technologies that empower scientists to conduct research, beyond the grasp of academic and government grants.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
