import { IUserData } from "@/helpers/help"
import { NextRequest, NextResponse } from "next/server"
import { IUserProp } from "@/helpers/help";
import { IAccessResponse } from "@/helpers/help";
export async function POST(request: NextRequest): Promise<NextResponse<IAccessResponse | ErrorResponse>> {
	try {
	  const body: IUserProp = await request.json();
	  const isValidUser = (body.email === 'nartdinov2020@gmail.com') && (body.password === 'Your1234!');
  
	  if (isValidUser) {
		const response: IAccessResponse = {
			accessKey: "youhaveaccess",
			expiresIn: 1000000,
		};
		return NextResponse.json(response);
	
	  } else {
		return NextResponse.json({ error: 'Invaild Email and password' } as ErrorResponse, { status: 500 });
	  }
	} catch (error) {
	  return NextResponse.json({ error: 'WRONG POST' } as ErrorResponse, { status: 500 });
	}
  }
  interface ErrorResponse {
	error: string;
  }
  
  export async function GET(request: NextRequest): Promise<NextResponse<IUserData | ErrorResponse>> {
	try {
		const authHeader = request.headers.get('Authorization');
	  if (!authHeader || authHeader !== "youhaveaccess") {
		return NextResponse.json({ error: 'Unauthorized' } as ErrorResponse, { status: 401 });
	  }
	  const userData: IUserData = {
		authed: true,
		firstName: 'John',
		lastName: 'Doe',
		age: 30,
		email: 'john.doe@example.com',
		image: 'https://example.com/avatar.jpg',
	  };
  
	  return NextResponse.json(userData);
	} catch (error) {
	  console.error('Error handling request:', error);
	  return NextResponse.json({ error: 'Internal Server Error' } as ErrorResponse, { status: 500 });
	}
  }