'use client'

import FormemeLogo from '@/../public/login_logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { FormButton } from './components/Button'
import { Input } from './components/Input'

export default function LoginPage() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorConfirm, setErrorConfirm] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    function changePassword(value: string) {
        if (value.length < 8) {
            setErrorPassword(true)
        } else {
            setErrorPassword(false)
            setPassword(value)
        }
    }

    function changeEmail(value: string) {
        const regexp = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        const isEmail = regexp.test(value)
        setErrorEmail(!isEmail)
        if (isEmail) setEmail(value)
    }

    function handleSubmit(event: React.FormEvent) {
        console.log('EVENTO:', event)

        event.preventDefault()

        console.log(errorEmail, errorPassword)
        if (!errorEmail && !errorPassword) router.push('buscar-professor')
    }

    return (
        <div className="flex relative justify-center items-center h-full">
            <div className="flex flex-col h-full justify-center items-center pb-16">
                <Image
                    className="p-8"
                    src={FormemeLogo}
                    alt="logo"
                    width={200}
                />
                <div className="grid grid-col-1 items-center">
                    <form onSubmit={handleSubmit} className="flex gap-12">
                        <Input
                            label="E-mail"
                            required
                            type="email"
                            valueChange={changeEmail}
                            placeholder="Digite um email"
                            helperText="Digite um email válido"
                            errorMessage="E-mail está incorreto"
                            error={errorEmail}
                        />
                        <div>
                            <Input
                                label="Senha"
                                required
                                type="password"
                                valueChange={changePassword}
                                placeholder="Digite uma senha"
                                helperText="Digite uma senha de 8 caracteres"
                                errorMessage="Padrão de senha incorreto"
                                error={errorPassword}
                            />

                            <div className="flex flex-col pt-5">
                                <span className="text-xs">
                                    Não possui conta?{' '}
                                    <span className="text-xs text-verde font-bold">
                                        Cadastre-se
                                    </span>
                                </span>
                                <span className="text-xs text-verde font-bold mt-3">
                                    Esqueci a senha
                                </span>

                                <FormButton type="submit">Entrar</FormButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
