interface NewsImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

function NewsImage({ src, alt, ...rest }: NewsImageProps) {
  return (
    <div className="w-full h-32 overflow-hidden sm:h-full lg:relative lg:h-auto">
      <img
        { ...rest }
        className="lg:absolute lg:object-cover lg:top-0 lg:left-0
        lg:right-0 lg:w-full lg:h-full"
        src={ src }
        alt={ alt }
      />
    </div>
  );
}

export default NewsImage;
