import { IconContent, IconsContainer, IssueContainer, IssueContent, NavIssueContainer, TitleIssueContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeHighlight from 'rehype-highlight';

interface User {
  login: string
}

interface Post {
  title: string
  html_url: string
  body: string
  comments: number
  created_at: string
  user: User
}

export function Issue() {
  const [post, setPost] = useState<Post>({
    title: '', 
    html_url: '', 
    body: '', 
    comments: 0, 
    created_at: '01/01/2001', 
    user: {login: ''}
  })

  const { id } = useParams()

  useEffect(() => {
    getPost()
  }, [])

  async function getPost() {
    const response = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)

    setPost(response.data)
  }

	return (
		<IssueContainer>
			<TitleIssueContainer>
				<NavIssueContainer>
					<NavLink to="/">
						<FontAwesomeIcon icon={faAngleLeft} color="#3294f8" />
						<span>VOLTAR</span>
					</NavLink>
					<a href={post.html_url}>
						<span>VER NO GITHUB</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294f8" />
					</a>
				</NavIssueContainer>

				<h3>{post.title}</h3>

				<IconsContainer>
					<IconContent>
						<FontAwesomeIcon icon={faGithub} color="#3A536B" />
						<span>{post.user.login}</span>
					</IconContent>
					<IconContent>
						<FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
						<span>{formatDistanceToNow(new Date(post.created_at), {locale: ptBR, addSuffix: true})}</span>
					</IconContent>
					<IconContent>
						<FontAwesomeIcon icon={faComment} color="#3A536B" />
						<span>{post.comments} comentários</span>
					</IconContent>
				</IconsContainer>
			</TitleIssueContainer>

			<IssueContent>
        <p>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} className="react-markdown">
            {post.body}
          </ReactMarkdown>
        </p> 
			</IssueContent>
		</IssueContainer>
	)
}