type NewsImageProps = {
  src: string;
  alt: string;
};

function NewsImage({ src, alt }: NewsImageProps) {
  return (
    <div className="w-full h-32 bg-red-200 overflow-hidden">
      <img src={ src } alt={ alt } />
    </div>
  );
}

export default NewsImage;
