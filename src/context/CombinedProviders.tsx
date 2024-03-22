import NewsListProvider from './NewsListContext/NewsListProvider';
import SavedNewsProvider from './SavedNewsContext/SavedNewsProvider';
import SearchNewsProvider from './SearchNewsContext/SearchNewsProvider';

type CombinedProvidersProps = {
  children: React.ReactNode;
};

function CombinedProviders({ children }: CombinedProvidersProps) {
  return (
    <SearchNewsProvider>
      <SavedNewsProvider>
        <NewsListProvider>
          {children}
        </NewsListProvider>
      </SavedNewsProvider>
    </SearchNewsProvider>
  );
}

export default CombinedProviders;
