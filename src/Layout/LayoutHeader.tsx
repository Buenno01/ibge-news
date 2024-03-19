import Header from '../components/Header';

function LayoutHeader() {
  return (
    <Header.Root>
      <Header.MenuContainer>
        <Header.MenuItem Icon={ () => 'Home' } />
        <Header.MenuItem Icon={ () => 'Saved' } />
      </Header.MenuContainer>
    </Header.Root>
  );
}

export default LayoutHeader;
