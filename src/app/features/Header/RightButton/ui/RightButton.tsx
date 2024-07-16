import {Flex, NewIcon} from "stone-kit";
import s from '../../ui/Header.module.scss';
import Button from "@/src/app/widgets/Button";
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";
import {Dispatch, SetStateAction, useContext} from "react";
import {FormContext} from "@/src/app/providers/formProvider";


interface IRightButtons {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    isModalOpen: boolean
}

const RightButtons = ({setIsModalOpen, isModalOpen}: IRightButtons) => {

    const {isDesktop} = useClientWidth()
    const form = useContext(FormContext)


    return <Flex className={s.menuBtn}>
        <Button additionalClass={s.phone}
                variant='blue'
                as='link'
                href='tel:88007752471'>
            <NewIcon
                name='phoneFilled'
                size='16'
            />
        </Button>

        <Button
            width='full'
            variant='blue'
            as='button'
            size={isDesktop ? 'medium' : 'medium'}
            additionalClass={`${s.btn} ${s.btn_call}`}
            post={
                <NewIcon
                    name='arrowLong'
                    deg='-90'
                    color='white'
                />
            }
            onClick={() => form?.setIsFormModalOpen(true)}>
            Оставить обращение
        </Button>

        <Button
            variant='gray'
            as='link'
            href='https://stone.ru'>
            <NewIcon
                name='user'
                color='#141416'
                size='16'
            />
        </Button>
        <Button
            variant='gray'
            as='button'
            onClick={() => {
                !form?.isFormModalOpen && setIsModalOpen((prev) => !prev)
                form?.isFormModalOpen && form?.setIsFormModalOpen((prev) => !prev)
            }}>
            <NewIcon
                name={isModalOpen || form?.isFormModalOpen ? 'burgerClose' : 'burger'}
                color='#141416'
                size='16'
            />
        </Button>
    </Flex>
}

export default RightButtons
