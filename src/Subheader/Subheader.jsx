// @flow
import * as React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** String, or FormattedMessage to display as Subheading */
  title: React.Element,
  content?: React.Element,
  /** Additional classNames to add to component */
  classList?: string | Array<string>,
}

const Subheader = (props: Props) => {
  const {
    title,
    content,
    classList,
  } = props;

  return (
    <div className={classNames('ac-subheader ac-subheader-wrapper', classList)}>
      <div className="ac-subheader__section">
        <h3>
          { title }
        </h3>
      </div>
      { content
        && (
        <div className="ac-subheader__content">
          {content}
        </div>
        )
      }
    </div>
  );
};

Subheader.defaultProps = {
  content: null,
  classList: '',
};

export default Subheader;
