import axios from "axios"
import { useState } from "react"
const QuotesGenerator = () => {
    const [quote, setQuote] = useState(null)
    const [quoteAuthor, setQuoteAuthor] = useState(null)
    const genQuoteFunc = () => {
        axios.get('https://api.quotable.io/random').then((res)=>{
            console.log(res.data)
            setQuote(res.data.content)
            setQuoteAuthor(res.data.author)
          })

    }
    return(
        <>
        <button onClick={genQuoteFunc}>Generate Quote</button>
        <p>{quote}</p>
        <p>Author: {quoteAuthor}</p>
        </>
    )
}

export default QuotesGenerator