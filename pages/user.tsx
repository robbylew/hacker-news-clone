import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Link from 'next/link';
import * as React from 'react';
import parse from 'html-react-parser';

import { convertNumberToTimeAgo } from '../src/helpers/convert-number-to-time-ago';
import { withDataAndRouter } from '../src/helpers/with-data';
import { BlankLayout } from '../src/layouts/blank-layout';
import { MainLayout } from '../src/layouts/main-layout';

const query = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      about
      creationTime
      email
      karma
    }
    me {
      id
    }
  }
`;

export interface IUserPageProps {
  router;
}

export interface IUserPageQuery {
  loading;
  error;
  user;
  me;
}

function UserPage(props: IUserPageProps): JSX.Element {
  const { router } = props;

  const userId = (router.query && router.query.id) || '';

  const { data } = useQuery<IUserPageQuery>(query, { variables: { id: userId } });

  if (data?.error) {
    return <BlankLayout>Error loading news items.</BlankLayout>;
  }
  if (!data?.user) {
    return <BlankLayout>No such user.</BlankLayout>;
  }

  let about = data?.user?.about || '';
  let email = data?.user?.email || '';

  const onAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    about = e.target.value;
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    email = e.target.value;
  };

  if (data?.me && data?.user.id === data.me.id)
    return (
      <MainLayout currentUrl={router.pathname} isFooterVisible={false}>
        <tr>
          <td>
            <form className="profileform" method="post" action="/xuser">
              <input type="hidden" name="id" value="robbylew" />
              <input type="hidden" name="hmac" value="71104445c3c41b4167c38db67a656e610d5fbad9" />
              <table style={{ border: '0px' }}>
                <tbody>
                  <tr className="athing">
                    <td style={{ verticalAlign: 'top' }}>user:</td>
                    <td>
                      <Link href="/user?id=robbylew" className="hnuser" style={{ color: '#3c963c' }}>
                          {data?.user.id}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>created:</td>
                    <td>{convertNumberToTimeAgo(data?.user.creationTime)}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>karma:</td>
                    <td>{data?.user.karma}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>about:</td>
                    <td>
                      <textarea
                        cols={60}
                        defaultValue={parse(about)}
                        name="about"
                        onChange={onAboutChange}
                        rows={5}
                        style={{ fontSize: '-2' }}
                        wrap="virtual"
                      />
                      <Link href="/formatdoc" tabIndex={-1} style={{ color: '#afafaf' }}>
                          help
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>email:</td>
                    <td>
                      <input
                        type="text"
                        name="uemail"
                        defaultValue={email}
                        onChange={onEmailChange}
                        size={60}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>showdead:</td>
                    <td>
                      <select defaultValue="no" name="showd">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>noprocrast:</td>
                    <td>
                      <select defaultValue="no" name="nopro">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>maxvisit:</td>
                    <td>
                      <input type="text" name="maxv" defaultValue="20" size={16} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>minaway:</td>
                    <td>
                      <input type="text" name="mina" defaultValue="180" size={16} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>delay:</td>
                    <td>
                      <input type="text" name="delay" defaultValue="0" size={16} />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/changepw">
                          <u>change password</u>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/submitted?id=robbylew">
                          <u>submissions</u>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/threads?id=robbylew">
                          <u>comments</u>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/hidden">
                          <u>hidden</u>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/upvoted?id=robbylew">
                          <u>upvoted submissions</u>
                      </Link>
                      {' / '}
                      <Link href="/upvoted?id=robbylew&comments=t">
                          <u>comments</u>
                      </Link>
                      &nbsp;&nbsp;
                      <span style={{ fontStyle: 'italic' }}>(private)</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Link href="/favorites?id=robbylew">
                          <u>favorite submissions</u>
                      </Link>
                      {' / '}
                      <Link href="/favorites?id=robbylew&amp;comments=t">
                          <u>comments</u>
                      </Link>
                      &nbsp;&nbsp;
                      <span style={{ fontStyle: 'italic' }}>(shared)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <input type="submit" value="update" />
            </form>
            <br />
            <br />
          </td>
        </tr>
      </MainLayout>
    );

  return (
    <MainLayout currentUrl={router.pathname} isFooterVisible={false}>
      <tr>
        <td>
          <table style={{ border: '0' }}>
            <tbody>
              <tr className="athing">
                <td style={{ verticalAlign: 'top' }}>user:</td>
                <td>
                  <a href={`user?id=${data?.user?.id}`} className="hnuser">
                    {data?.user.id}
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ verticalAlign: 'top' }}>created:</td>
                <td>{convertNumberToTimeAgo(data?.user.creationTime)}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: 'top' }}>karma:</td>
                <td>{data?.user.karma}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: 'top' }}>about:</td>
                <td>{data?.user.about && parse(data?.user.about)}</td>
              </tr>
              <tr>
                <td />
                <td>
                  <a href={`submitted?id=${data?.user.id}`}>
                    <u>submissions</u>
                  </a>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <a href={`threads?id=${data?.user.id}`}>
                    <u>comments</u>
                  </a>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <a href={`favorites?id=${data?.user.id}`}>
                    <u>favorites</u>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </td>
      </tr>
    </MainLayout>
  );
}

export default withDataAndRouter(UserPage);
