import React, {useState} from 'react';
import styles from './FeedbackForm.module.css';
import commonStyles from '../../common/CommonStyles.module.css';

type PropsType = {};

export const FeedbackForm = (props: PropsType) => {

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (name.trim().length !== 0 && email.trim().length !== 0 && message.trim().length !== 0) {
            const msg = [name, email, message].join('\n');
            window.alert(msg);
            setEmail('');
            setName('');
            setMessage('');
        }
    };

    return (
        <div className={[commonStyles.container, styles.feedback].join(' ')}>
            <h2 className={commonStyles.section__title}>Связаться со мной</h2>
            <form className={styles.form}>
                <input
                    className={[styles.form__input, styles.form__input_input].join(' ')}
                    type="text"
                    value={name}
                    onChange={( event => setName(event.currentTarget.value) )}
                    placeholder={'Ваше имя'}/>
                <input
                    className={[styles.form__input, styles.form__input_input].join(' ')}
                    type="text"
                    value={email}
                    onChange={( event => setEmail(event.currentTarget.value) )}
                    placeholder={'Ваш email'}/>
                <textarea
                    className={[styles.form__input, styles.form__input_textarea].join(' ')}
                    name=""
                    id=""
                    cols={30}
                    rows={5}
                    value={message}
                    onChange={( event => setMessage(event.currentTarget.value) )}
                    placeholder={'Ваше сообщение'}
                />
                <button
                    className={styles.button}
                    onClick={sendMessage}>Отправить
                </button>
            </form>
        </div>
    );
};