import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './styles.css'


function TestStockCard() {
    return (
        <Card className='card'>
            <CardContent>
                <h4>AAPL</h4>
                <p>251,12</p>
            </CardContent>
        </Card>
    )
}

export default TestStockCard;


