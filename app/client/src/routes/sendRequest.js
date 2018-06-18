function _get(query)
{fetch("http://localhost:7000/"+query)
.then((res) => res.json())
  .then(
    (results) => {this.setState({isLoaded: true, items:results})},
    (error) => {this.setState({isLoaded: true, error}); }
  )
}

module.exports=_get