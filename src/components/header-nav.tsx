import Link from 'next/link';
import * as React from 'react';

interface IHeaderNavProps {
  userId?: string;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function HeaderNav(props: IHeaderNavProps): JSX.Element {
  const { userId, currentUrl, isNavVisible, title } = props;

  return isNavVisible ? (
    <span className="pagetop">
      <b className="hnname">
        <Link href="/" as="/news">
          {title}
        </Link>
      </b>
      &nbsp;
      {userId && (
        <Link href="/newswelcome">
          welcome
        </Link>
      )}
      {userId && ' | '}
      <Link href="/newest" className={currentUrl === '/newest' ? 'topsel' : ''}>
        new
      </Link>
      {userId && ' | '}
      {userId && (
        <Link href={`/threads?id=${userId}`} className={currentUrl === '/threads' ? 'topsel' : ''}>
          threads
        </Link>
      )}
      {' | '}
      <Link href="/newcomments" className={currentUrl === '/newcomments' ? 'topsel' : ''}>
        comments
      </Link>
      {' | '}
      <Link href="/show" className={currentUrl === '/show' ? 'topsel' : ''}>
        show
      </Link>
      {' | '}
      <Link href="/ask" className={currentUrl === '/ask' ? 'topsel' : ''}>
        ask
      </Link>
      {' | '}
      <Link href="/jobs" className={currentUrl === '/jobs' ? 'topsel' : ''}>
        jobs
      </Link>
      {' | '}
      <Link href="/submit" className={currentUrl === '/submit' ? 'topsel' : ''}>
        submit
      </Link>
      {currentUrl === '/best' && ' | '}
      {currentUrl === '/best' && (
        <Link href="/best" className="topsel">
          best
        </Link>
      )}
    </span>
  ) : (
    <span className="pagetop">
      <b>{title}</b>
    </span>
  );
}
