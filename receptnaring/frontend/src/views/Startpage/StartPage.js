import React, { useState, useEffect } from 'react';
import RecipeInput from '../../components/RecipeInput';
import RandomRecipes from './RandomRecipes/RandomRecipes'
import { Row } from 'reactstrap';
import {
  RecipeWrapper,
  TextBanner,
  TextInfo,
  StyledSpinner,
  StartPageContainer
} from './StyledStartPage';

const StartPage = () => {

  const [searchResult, setSearchResult] = useState(null);
  const useFetch = (url) => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        setAllRecipes(await respons.json())
        setLoading(false);
      };
      fetchData();
    }, [url]);
    return { allRecipes, loading };
  }
  
  const { allRecipes, loading } = useFetch('http://localhost:3001/api/recipes');

  const searchRecipe = (searchTerm) => {
    const resultOfSearch = allRecipes.filter(recipe => {
      return recipe.title.toLowerCase().includes(searchTerm)
    })
    setSearchResult(renderAllFuckingRecipes(resultOfSearch))
  }
  const renderRecipe = (allRecipes, index) => <RandomRecipes key={index} img={`/images/${allRecipes.img} `} title={allRecipes.title} />

  const renderAllFuckingRecipes = (recipes = allRecipes) =>
    recipes ? recipes.map((randomRecipes, index) => renderRecipe(randomRecipes, index))
      : null;

  return (
    <StartPageContainer>
      <RecipeInput callback={searchRecipe} />
      <TextBanner>
        <TextInfo>
          Recept
          </TextInfo>
      </TextBanner>
      <RecipeWrapper>
        <Row>
          {loading ? (<StyledSpinner />) : (searchResult ||  renderAllFuckingRecipes())}
        </Row>
      </RecipeWrapper>
    </StartPageContainer>
  )
};

export default StartPage;