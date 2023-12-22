<Fragment>
<BaseLayout pageTitle={frontmatter.title}>
<h1>{frontmatter.title}</h1>
<p>Written by {frontmatter.author}</p>
<slot />
</BaseLayout>

</Fragment>;
