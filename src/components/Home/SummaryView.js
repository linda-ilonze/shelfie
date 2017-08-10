import React from 'react';
import { Card,CardImg, CardBlock, CardDeck } from 'reactstrap';
import KindleIcon from './../../images/Kindle-icon.png';
import PlayBooksIcon from './../../images/Google-Play-Books-icon.png';
import IBooksIcon from './../../images/iBook-icon.png';

const SummaryView = ({books}) => {
    
    return(
      <div className="row bg-faded p-3">
        <div className="mx-auto">
            <CardDeck >
            <Card className="m-4"> 
                <CardBlock>
                <h1 className="display-4 pull-right text-muted">
                    {
                        books.reduce((prevValue, book)=>  {
                            return (book.application && book.application === "Kindle"  ?  prevValue + 1 : prevValue )
                        }, 0 )
                    }</h1>
                <CardImg width="50%" src={KindleIcon} alt="Kindle Books"/>
                </CardBlock>
            </Card>
            <Card className="m-4">
                <CardBlock>
                <h1 className="display-4 pull-right text-muted">
                {
                        books.reduce((prevValue, book)=>  {
                            return (book.application && book.application === "PlayBooks"  ?  prevValue + 1 : prevValue )
                        }, 0 )
                    }
                </h1>
                <CardImg width="50%" src={PlayBooksIcon} alt="Google Play Books"/>
                </CardBlock>
            </Card>
            <Card className="m-4">
                <CardBlock>
                    <h1 className="display-4 pull-right text-muted">                   {
                        books.reduce((prevValue, book)=>  {
                            return (book.application && book.application === "IBooks"  ?  prevValue + 1 : prevValue )
                        }, 0 )
                    }</h1>
                    <CardImg width="50%" src={IBooksIcon} alt="iBooks"/>
                </CardBlock>
            </Card>
            <Card className="m-4">
                <CardBlock>
                <h1 className="display-4 pull-right text-muted">
                {
                        books.reduce((prevValue, book)=>  {
                            return (book.application && book.application === "Other"  ?  prevValue + 1 : prevValue )
                        }, 0 )
                    }</h1>
                <i className="fa fa-book fa-5x"></i>
                </CardBlock>
            </Card>
            </CardDeck>
         </div>
    </div>
    );
}

export default SummaryView;