import React from 'react';
import { Avatar } from '../elements';
import { toggleClass } from '../utils/helpers';
import './styles/UserCell.css';

const UserCell = ({ user, user: { first_name, last_name, avatar, id }, selectBuddy, buddy }) => {
  const name = `${first_name[0]}${last_name[0]}`;

  return (
    <article
      className={toggleClass(buddy.id !== id, 'user-cell', 'user-cell-active')}
      onClick={() => selectBuddy(user)}
      >
      <section className="user-cell-info">
        <Avatar id="avatar" color={avatar} size={50} fontSize={1.5}>
          {name}
        </Avatar>
        <h3 className="user-cell-name">{`${first_name} ${last_name}`}</h3>
      </section>
    </article>
  )
}

export default UserCell;
