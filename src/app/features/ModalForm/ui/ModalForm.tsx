import {Button, Flex, Input, Modal, Text} from 'stone-kit'
import {useState} from 'react'
import s from './ModalForm.module.scss'

interface IModalFormProps {
    isFormOpen: boolean
    setIsFormOpen: (isOpen: boolean) => void
}

export const ModalForm = ({isFormOpen, setIsFormOpen}: IModalFormProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <Modal
            isOpen={isFormOpen}
            emitIsOpen={() => setIsFormOpen(false)}
            additionalClass={s.modal} additionalClassModalBody={s.modalBody}>
            <div className={s.root}>
                <Text
                    className={s.title}
                    html={`Оставить обращение`}
                />
                <Text
                    className={s.description}
                    html={`Оставьте номер телефона для получения консультации`}
                />
                <form>
                    <Flex className={s.inputWrapper}>
                        <Input
                            width='full'
                            size_s='small'
                            variant='light'
                            placeholder='Введите имя'
                        />
                        <Input
                            width='full'
                            size_s={'small'}
                            variant='light'
                            placeholder='+7(---)--- -- --'
                        />
                        <label className={s.checkboxLabel}>
                            <input
                                type='checkbox'
                                onChange={() => setIsChecked((prev) => !prev)}
                                checked={isChecked}
                            />
                            <Text
                                className={s.labelText}
                                html={`Я принимаю условия Политики обработки и защиты персональных данных, даю согласия на обработку персональных данных`}
                            />
                        </label>
                    </Flex>
                    <Button
                        variant='blue'
                        width='full'
                        size='large'
                        as='button'
                        additionalClass={s.modalBtn}
                        onClick={(e) => e.preventDefault()}>
                        Отправить
                    </Button>
                </form>
            </div>
        </Modal>
    )
}

