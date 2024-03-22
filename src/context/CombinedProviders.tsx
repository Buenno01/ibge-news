import SearchNewsProvider from './SearchNewsContext/SearchNewsProvider';

type CombinedProvidersProps = {
  children: React.ReactNode;
};

function CombinedProviders({ children }: CombinedProvidersProps) {
  return (
    <SearchNewsProvider>
      {children}
    </SearchNewsProvider>
  );
}

export default CombinedProviders;
