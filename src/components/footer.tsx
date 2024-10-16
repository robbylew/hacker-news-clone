import Link from 'next/link';
import * as React from 'react';

export function Footer(): JSX.Element {
  return (
    <tr>
      <td style={{ padding: '0px' }}>
        <img alt="" src="/static/s.gif" height="10" width="0" />
        <table style={{ height: '2px', width: '100%', borderSpacing: '0px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#ff6600' }} />
            </tr>
          </tbody>
        </table>
        <br />
        <div style={{ textAlign: 'center' }}>
          <span className="yclinks">
            <a href="/newsguidelines">Guidelines</a>
            &nbsp;|{' '}
            <Link href="/newsfaq">
              FAQ
            </Link>
            &nbsp;|{' '}

            <Link href="/lists">
              Lists
            </Link>
            &nbsp;| <a href="https://github.com/HackerNews/API">API</a>
            &nbsp;|{' '}
            <Link href="/security">
              Security
            </Link>
            &nbsp;| <a href="https://www.ycombinator.com/legal/">Legal</a>

            &nbsp;| <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
            &nbsp;| <a href="mailto:hn@ycombinator.com">Contact</a>
          </span>
          <br />
          <br />
          <form method="get" action="//hn.algolia.com/" style={{ marginBottom: '1em' }}>
            Search:
            <input
              type="text"
              name="q"
              size={17}
              autoCorrect="off"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="false"
            />
          </form>
        </div>
      </td>
    </tr>
  );
}
