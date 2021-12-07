import React from 'react'
import './loading.css'
import { Spin, Alert } from 'antd';

function Loading({loading, className}) {
    return (
        <div className={className ? className : 'fullscreen-loading'}>
            {/* <div className="load-page">
                <div className="loader"> */}

                    <Spin tip="Loading..." loading={loading}>
                        {/* <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                        /> */}
                    </Spin>
                 {/* </div>
             </div> */}
         </div>
    )
}

export default Loading
