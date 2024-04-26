interface Props {
    src: string;
    alt: string;
}

export function IconComponent({ src, alt }: Props) {
    return <img src={src} alt={alt} />;
}
