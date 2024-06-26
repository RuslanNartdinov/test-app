export interface IExpectedCoin {
	ath: number;
	ath_change_percentage: number;
	ath_date: string;
	atl: number;
	atl_change_percentage: number;
	atl_date: string;
	circulating_supply: number;
	current_price: number;
	fully_diluted_valuation: number;
	high_24h: number;
	id: string;
	image: string;
	last_updated: string;
	market_cap: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	market_cap_rank: number;
	max_supply: number;
	name: string;
	price_change_24h: number;
	price_change_percentage_24h: number;
	roi: number | null;
	symbol: string;
	total_supply: number;
	total_volume: number;
  }
  export interface IUserData {
		authed: boolean,
		firstName : string,
		lastName: string,
		age: number,
		email: string,
		image: string
  };

  export interface IUserProp {
	email: string,
	password: string
  }
  export const getCoins = async (page : number): Promise<IExpectedCoin[]> => {
	const result = await fetch(
	  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`
	);
	if (!result.ok) {
		throw new Error('Network response from geckcoins was not ok');
	}
	const data = await result.json();
	return data;
  };
  export interface IAccessResponse {
	accessKey: string;
	expiresIn: number;
  }
  
  export const getAccess = async (body: IUserProp): Promise<IAccessResponse> => {
	try {
	  const result = await fetch('/api/user', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	  });
  
	  if (!result.ok) {
		throw new Error(`NetworK response was not ok: ${result.statusText}`);
	  }
  
	  const data = await result.json();
  
	  if (!data.accessKey) {
		throw new Error('Access key not found in response');
	  }
  
	  return {
		accessKey: data.accessKey,
		expiresIn: data.expiresIn,
	  };
	} catch (error) {
	  console.error('Error in getAccess:', error);
	  throw error;
	}
  };
  
  export const getUser = async (accessKey: string): Promise<IUserData> => {
	try {
	  const result = await fetch('/api/user', {
		method: 'GET',
		headers: {
		  Authorization: accessKey,
		},
	  });
  
	  if (!result.ok) {
		throw new Error(`wrong resukt.ok getUser: ${result.statusText}`);
	  }
  
	  const userData: IUserData = await result.json();
	  return userData;
	} catch (error) {
	  console.error('Error in getUserData:', error);
	  throw error;
	}
  };