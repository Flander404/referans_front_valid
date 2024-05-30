import Box from '@mui/material/Box';
import { Button, MenuItem, Modal, Select, Typography } from "@mui/material"
import Input from '../input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TopUpModalConfirm = ({ onClose, open, changeStep, formData }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{

            }}
        >
            <Box sx={style}>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: 'Stolzl'
                    }}
                >
                    Заявка на пополнение
                </Typography>
                <Typography
                    sx={{
                        mt: "15px",
                        fontSize: "11px",
                        fontFamily: 'Stolzl'
                    }}
                >
                    Переведите {formData.price} {formData.currency} по QR-коду (Тинькоф). В личном кабинете переведенные средства будут конвертированы в USDT автоматически.
                </Typography>
                <Box
                    sx={{
                        width: "104px",
                        height: "133px",
                        mt: "15px"
                    }}
                >
                    <img 
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                        src="https://s3-alpha-sig.figma.com/img/0924/a399/5320d2d7d1cdd16cc5838e5771c93ef8?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpS1oRNyw6edD0vc75fdkvZCKFYAezm5tr-mp9xIiZk7rAyofU2cqhTnw4x1r9kslZ4uDwbEEU5aRVOm2Dcfty1oLUkdgM-~xYEnHTfwlf8xnIipMJUGgxCsKBOd~9wJUNLS~Cqz3yLzkj6~QePOorkEL3jU1MP5yGk3e2qlnghg-HtYLwi-0xYJcrLGfi8mGAysA8UepqpNJPqUFmJZFknytZnXfgEWH54cqRW-qxy4rpf-JR5AHq3RIOSlmATBc--X7S8Gac29MPWWiADQLJ3aFe4r53RZS4zGmSyRr6XdQPfBc0OJHJAZKaNsDo8hOlSIlU8XK~DM~njuWKsjuQ__"
                        alt={""}
                    />
                </Box>
                <Typography
                    sx={{
                        fontSize: "11px",
                        fontFamily: 'Stolzl',
                        width: "100%",
                        mt: "15px"
                    }}
                >
                    После перевода средств по реквизитам, указанным ниже, пожалуйста, прикрепите скриншот перевода / транзакции.
                </Typography>
                <Box>
                    <Button
                        variant='outlined'
                        onChange={changeStep}
                        sx={{
                            borderRadius: "30px",
                            fontFamily: 'Stolzl',
                            color: "#000000",
                            px: "48px",
                            mt: "15px",
                            fontSize: "11px",
                        }}
                    >
                        Загрузить
                    </Button>
                </Box>
                <Button
                    variant='contained'
                    onClick={changeStep}
                    sx={{
                        borderRadius: "30px",
                        fontFamily: 'Stolzl',
                        color: "#ffffff",
                        px: "35px",
                        mt: "15px",
                        fontSize: "11px"
                    }}
                >
                    Далее
                </Button>
            </Box>
        </Modal>
    );
}

export default TopUpModalConfirm;