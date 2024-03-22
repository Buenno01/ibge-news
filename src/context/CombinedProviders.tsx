import NewsListProvider from './NewsListContext/NewsListProvider';
import SearchNewsProvider from './SearchNewsContext/SearchNewsProvider';

type CombinedProvidersProps = {
  children: React.ReactNode;
};

function CombinedProviders({ children }: CombinedProvidersProps) {
  return (
    <SearchNewsProvider>
      <NewsListProvider>
        {children}
      </NewsListProvider>
    </SearchNewsProvider>
  );
}

export default CombinedProviders;
