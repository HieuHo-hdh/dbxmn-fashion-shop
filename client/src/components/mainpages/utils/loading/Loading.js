import React from 'react'
import './loading.css'
import { Spin, Alert } from 'antd';

function Loading() {
    return (
        <div className="load-page">
            <div className="loader">

                <Spin tip="Loading...">
                    <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                    />
                </Spin>
            </div>
        </div>
    )
}

export default Loading
