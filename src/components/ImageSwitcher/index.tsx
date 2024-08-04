import { useColorMode } from '@docusaurus/theme-common';

type ImageSwitcher = {
    lightImageSrc: string;
    darkImageSrc: string;
    alt: string;
}

export default function ImageSwitcher({
    lightImageSrc = undefined,
    darkImageSrc = undefined,
    alt = ''
}: ImageSwitcher) {
    const { isDarkTheme } = useColorMode();
    return (
        <img src={isDarkTheme? darkImageSrc : lightImageSrc} alt={alt} />
    );
}
