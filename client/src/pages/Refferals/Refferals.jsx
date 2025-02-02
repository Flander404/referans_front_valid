import React from 'react';
import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import UniversalTable from "../../components/UI/table";
import CopyIcon from "../../assets/images/copy-icon.svg";
import toast from "react-hot-toast";

function transformUsersFormat(users) {
    return users.map((item) => ({
        id: item._id,
        fullName: `${item.firstName || ""} ${item.lastName || ""}`,
        email: item.email,
    }));
}

const headers = [
    "ID",
    "Имя пользователя",
    "Email",
];

const columnTypes = [
    "default",
    "default",
    "default",
    "default",
];

const Refferals = () => {
    const user = useSelector((state) => state.user?.currentUser?.user);
    const referralLink = `${window.location.origin}/registration?ref=${user.id}`;

    const copyToClipboard = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(referralLink).then(function () {
            toast.success("Link coped to clipboard");
        }, function (err) {
            toast.error('Async: Could not copy text: ', err);
        });
    }

    console.log(user.referrals)

    const navigateToRefferalLink = () => {
        window.open(referralLink, "_blank");
    }

    return (
        <Box className="container">
            <Box
                sx={{
                    width: "100%"
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontSize: "35px",
                        fontFamily: 'Stolzl',
                        mt: "50px"
                    }}
                >
                    Реферальная программа
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottomWidth: "1px",
                        borderTopWidth: "1px",
                        borderColor: "#000000",
                        borderTopStyle: "solid",
                        borderBottomStyle: "solid",
                        mt: "35px",
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontFamily: 'Stolzl',
                            }}
                        >
                            Ваш статус
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: 'Stolzl',
                                mt: "10px"
                            }}
                        >
                            Партнер
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontFamily: 'Stolzl',
                            }}
                        >
                            Бонус
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: 'Stolzl',
                                mt: "10px"
                            }}
                        >
                            10%
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontFamily: 'Stolzl',
                            }}
                        >
                            Мои рефералы
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: 'Stolzl',
                                mt: "10px"
                            }}
                        >
                            {user?.referrals?.length}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontFamily: 'Stolzl',
                            }}
                        >
                            Бонусы с реферальной программы
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: 'Stolzl',
                                mt: "10px"
                            }}
                        >
                            0 USDT
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontFamily: 'Stolzl',
                            }}
                        >
                            Реферальная ссылка
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: 'Stolzl',
                                mt: "10px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                            }}
                            onClick={navigateToRefferalLink}
                        >
                            <img
                                src={CopyIcon}
                                alt="copy icon"
                                onClick={copyToClipboard}
                                style={{
                                    marginRight: "4px",
                                }}
                            />
                            {referralLink}
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontSize: "35px",
                        fontFamily: 'Stolzl',
                        mt: "50px"
                    }}
                >
                    История
                </Typography>

                <UniversalTable
                    data={transformUsersFormat(user.referrals)}
                    headers={headers}
                    columnTypes={columnTypes}
                />

            </Box>
        </Box>
    );
};

export default Refferals;