import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { bodyFormatter, queryFormatter } from "../../utils/formatter";
import { Profile } from "./components/Profile";
import { SearchIssue } from "./components/SearchIssue";
import { PostsContainer, IssuesContainer, IssueCard, IssueHeader } from "./styles";

interface Post {
	title: string
	body: string
	number: number
	created_at: string
}

export function Posts() {
	const [posts, setPosts] = useState<Post[]>([])

	const navigate = useNavigate()
	
	const getListPost = useCallback( async (query?:string) => {
		const response = await api.get(
			`/search/issues?q=${queryFormatter(query)}repo:rocketseat-education/reactjs-github-blog-challenge`
		)

		setPosts(response.data.items)
	}, [])

	useEffect(() => {
		getListPost()
	}, [])

	return (
		<PostsContainer>
			<Profile />

			<SearchIssue 
				getListPost={getListPost}
				number_publish={posts.length}
			/>

			<IssuesContainer>
				{posts.map((post) => {
					return (
							<IssueCard key={post.number} onClick={() => navigate(`/issue/${post.number}`)}>
								<IssueHeader>
									<h3>{post.title}</h3>
									<span>{formatDistanceToNow(new Date(post.created_at), {locale: ptBR, addSuffix: true})}</span>
								</IssueHeader>
								<p>
									{bodyFormatter(post.body)}
								</p>
							</IssueCard>
					)
				})}
			</IssuesContainer>
		</PostsContainer>
	)
}