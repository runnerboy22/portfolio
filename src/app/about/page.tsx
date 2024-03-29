import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/test3.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'About Tyler Wolfe',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="flex justify-center lg:justify-start lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            {/* <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:mx-auto md:mx-0"
            /> */}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Where I’m learning from:
          </h1>
          <div className="mt-2 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>Andrew Ng’s ML course</li>
            <li>Aubible books</li>
            {/* would be fun to have a dashboard displaying reading history */}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Where I’ve learned from:
          </h1>
          <div className="mt-2 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <li>Johns Hopkins</li>
            <ul>
              {' '}
              - Selfless contributions of the open source community and
              countless individuals who write articles and make videos for
              others to learn from.{' '}
            </ul>

            {/* <ul>Intro Java</ul>
            <ul>Intro to Computing (Bash & Python)</ul> */}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Where I came from:
          </h1>
          <div className="mt-2 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m originally from Long Island, NY. Possibly because of this, it
              took until I was 21 to write my first line of code and run up a
              mountain. These are 2 of my favorite things to do, and I often
              wonder if I would have appreciated them as much if I had grown up
              in a place where they were more accessible.
            </p>
          </div>

          {/* <p>
              I’ve loved building things for as long as I can remember, but my
              endeavors were mostly limited to Legos and K’Nex until I
              discovered programming as a senior in college.
            </p>
            <p>
              Today, I’m very cognizant of the unique experiences that I’ve had
              that led me to engineering.
            </p>

          {/* </div> */}
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/runnerboy22"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/atylerwolfe"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:atylerwolfe@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              atylerwolfe@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
