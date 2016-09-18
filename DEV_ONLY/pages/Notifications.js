import React from 'react';

import CodeBlock from '../components/CodeBlock';

const NOTIFICATION_TYPES = [
  '',
  'primary',
  'info',
  'success',
  'danger',
  'warning'
];

const Notifications = () => {
  return (
    <section>
      <h4>
        Notifications
      </h4>

      <p>
        You can provide any context as a notification, with styling for the "close" button as a child.
      </p>

      {NOTIFICATION_TYPES.map((notificationType, notificationTypeIndex) => {
        return (
          <div
            className={`notification ${notificationType}`}
            key={`notification-type-${notificationTypeIndex}`}
          >
            <button className="small close">
              X
            </button>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        );
      })}

      <CodeBlock>{NOTIFICATION_TYPES.reduce((codeBlock, notificationType) => {
return `
  ${codeBlock}
  <div class="notification ${notificationType}">
    <button class="small close">
      X
    </button>

    I am a ${notificationType ? notificationType: 'standard'} notification.
  </div>
`;
      }, '')}</CodeBlock>
    </section>
  );
};

export default Notifications;
