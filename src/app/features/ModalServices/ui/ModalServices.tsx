import {Button, Flex, Modal, NewIcon, Text} from 'stone-kit'
import {Logo} from '@/src/app/widgets/Logo'
import Image from 'next/image'
import {IModalServicesProps} from './ModalServices.types'
import s from './ModalServices.module.scss'

export const ModalServices = ({isModalOpen, setIsModalOpen, service}: IModalServicesProps) => {
    const {title, description, text, image} = service

    return (
        <Modal
            createPortalObj={{domNode: typeof document !== 'undefined' ? document.body : null}}
            isTransparentBack={false}
            isOpen={isModalOpen}
            emitIsOpen={() => {
                setIsModalOpen((prev) => !prev)
            }}
            additionalClassModalBody={s.modalContent}>
            <Flex className={s.modalHeader}>
                <Logo
                    variant='black'
                    uk
                />
                <Button
                    variant='gray'
                    as='button'
                    size='small'
                    onClick={() => setIsModalOpen(false)}>
                    <NewIcon
                        name='close'
                        size='16'
                    />
                </Button>
            </Flex>
            <Flex className={s.modalBody}>
                <div className={s.img}>
                    <Image
                        quality={100}
                        src={image}
                        fill
                        alt='фото сервиса'
                    />

                    <Button
                        additionalClass={s.close}
                        variant='gray'
                        as='button'
                        size='medium'
                        onClick={() => setIsModalOpen(false)}>
                        <NewIcon
                            name='close'
                            size='16'
                        />
                    </Button>
                </div>

                <Flex className={s.textWrapper}>
                    <Text
                        className={s.textTitle}
                        html={title}
                    />
                    {[0].map(() => {
                        return (<>
                            <Text
                                className={s.textDescription}
                                html={description}
                            />
                            <Text
                                className={s.textValue}
                                html={text}
                            />
                        </>)
                    })}
                </Flex>
            </Flex>
        </Modal>
    )
}

