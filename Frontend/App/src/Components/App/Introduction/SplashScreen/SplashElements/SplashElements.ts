import SplashOne from '../../../../../Assets/images/splash-one.svg'
import SplashTwo from '../../../../../Assets/images/splash-two.svg'
import SplashThree from '../../../../../Assets/images/splash-three.svg'

type splashType = {
    url: string,
    header: string,
    splashText: string
}

const SplashElements: splashType[] = [
    {
        url: SplashOne,
        header: 'Welcome to SereneVerse',
        splashText: 'Find calm within, one session at a time. We\'re here to support you on your journey to emotional wellness. Together, we can make a difference.'
    },
    {
        url: SplashTwo,
        header: 'Welcome to SereneVerse',
        splashText: 'Experience a journey of self-discovery and healing with SereneVerse. Begin your transformation today.'
    },
    {
        url: SplashThree,
        header: 'Welcome to SereneVerse',
        splashText: 'Take a moment to breathe, reflect, and find solace. SereneVerse is your companion on this journey towards better mental health.'
    }
]

export default SplashElements