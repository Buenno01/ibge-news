interface NewsImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

function NewsImage({ src, alt, ...rest }: NewsImageProps) {
  return (
    <div className="w-full h-32 bg-red-200 overflow-hidden">
      <img { ...rest } src={ src } alt={ alt } />
    </div>
  );
}

export default NewsImage;
