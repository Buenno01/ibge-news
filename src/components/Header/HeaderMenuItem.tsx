import { ElementType } from 'react';

interface HeaderMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ElementType;
}

function HeaderMenuItem({ Icon, ...rest }: HeaderMenuItemProps) {
  return (
    <li>
      <button { ...rest }>
        <Icon />
      </button>
    </li>
  );
}

export default HeaderMenuItem;
