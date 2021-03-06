import React from 'react'
import { RowZ, ColZ, TitleZ } from '.'
import { Avatar } from 'antd'
import MyAvartar from '../images/me.jpeg'


function Me() {
    return (
        <RowZ type="flex" justify="center" align="middle">
            <ColZ span={24}><TitleZ level={2}>Hoàng Ngọc Bảo Trân</TitleZ></ColZ>
            <ColZ span={24}><Avatar size={128} icon={<img src={MyAvartar} alt="avartar"/>}/></ColZ>
        </RowZ>

    )
}

export default Me
