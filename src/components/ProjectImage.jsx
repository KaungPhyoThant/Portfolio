import PropTypes from "prop-types";

const variants = {
  spotlight: {
    wrapper:
      "flex min-h-[280px] items-center justify-center bg-[#0a0814] p-4 sm:min-h-[360px] lg:min-h-full lg:p-6",
    image: "max-h-[320px] w-full object-contain sm:max-h-[400px] lg:max-h-[480px]",
  },
  card: {
    wrapper:
      "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#0a0814] px-3 py-4 sm:px-4",
    image: "h-full w-full object-contain object-center",
  },
  modal: {
    wrapper:
      "relative flex items-center justify-center bg-[#0a0814] px-4 py-6 sm:px-8 sm:py-8",
    image: "max-h-[min(480px,55vh)] w-full object-contain",
  },
};

const ProjectImage = ({
  src,
  alt,
  variant = "card",
  className = "",
  imageClassName = "",
  as: Component = "img",
  ...props
}) => {
  const styles = variants[variant] ?? variants.card;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Component
        src={src}
        alt={alt}
        className={`${styles.image} ${imageClassName}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["spotlight", "card", "modal"]),
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  as: PropTypes.elementType,
};

export default ProjectImage;
