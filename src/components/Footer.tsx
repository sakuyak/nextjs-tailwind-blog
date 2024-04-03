import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="zerion" href={siteMetadata.zerion} size={6} />
          <SocialIcon kind="linktree" href={siteMetadata.linktree} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a href="/" target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a>&nbsp;&nbsp;•&nbsp;&nbsp;</a>
          <a href="/" target="_blank" rel="noreferrer">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
