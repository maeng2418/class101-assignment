import React from 'react';
import styles from './styles.module.css';
import { ImInstagram, ImGithub, ImFacebook } from 'react-icons/im';

export const Footer: React.FC = () => {
  const social = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100005653248720',
      icon: <ImFacebook />,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/maeng25/',
      icon: <ImInstagram />,
    },
    {
      name: 'github',
      url: 'http://github.com/maeng2418',
      icon: <ImGithub />,
    },
  ];
  return (
    <div className={styles.footer}>
      <ul className={styles.socialLinks}>
        {social.map((network) => (
          <li key={network.name}>
            <a href={network.url}>{network.icon}</a>
          </li>
        ))}
      </ul>
      <div className={styles.copyright}>
        &copy; All credit goes to Myeongseong Kim - Copyright 2020 Myeongseong Kim
      </div>
    </div>
  );
};
