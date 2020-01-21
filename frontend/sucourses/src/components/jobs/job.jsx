import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export default function Job(props) {
    return (
        <React.Fragment>
            <Card style={{width : 300 , margin : 15 , height : 400}}>
                <CardContent>
                    <Typography>
                       Title : {
                            props.job.title
                        }
                    </Typography>
                    <Typography>
                        Company : {
                            props.job.company
                        }
                    </Typography>
                    <Typography>
                        Type : {
                            props.job.type
                        }
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
