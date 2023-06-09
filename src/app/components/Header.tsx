import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

// Importe o Link do Next.js
import FalarDevs from '../../../public/converse_devs.svg'
import FormeMeLogo from '../../../public/formeme_logo.svg'
import UserPicture from '../../../public/gus.jpeg'
import Sair from '../../../public/sair.svg'

export function Header() {
    return (
        <header
            className={clsx(
                'flex justify-between bg-azul text-white h-16 items-center px-8'
            )}
        >
            <Link href="/">
                <Image src={FormeMeLogo} alt="logo" />
            </Link>
            <nav className="w-1/3">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link href="/buscar-professor">Buscar Professor</Link>
                    </li>
                    <li>
                        <Link href="/buscar-projeto">Buscar Projetos</Link>
                    </li>
                    <Link href="/suporte">
                        <Image
                            src={FalarDevs}
                            alt="falar-com-desenvolvedores"
                        />
                    </Link>
                </ul>
            </nav>
            <div className="flex items-center">
                <Image
                    className="w-10 h-10 rounded-full mr-2"
                    src={UserPicture}
                    alt="usuario"
                />
                <span className="mr-2">User name</span>
                <Image src={Sair} alt="sair" />
            </div>
        </header>
    )
}
