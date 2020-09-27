The source for neurathsboat.blog.

To download all contents of this repository run:
```bash
git clone --recurse-submodules -j8 git@gitlab.com:neurathsboat.blog/neurathsboat.blog.git
```

## Instructions to publish a post on neurathsboat.blog

- Create repository based on template found in https://gitlab.com/neurathsboat.blog/posts/post-template
- Transfer ownership to @neurathsboat gitlab.com user
- Transfer repository to gitlab.com/neurathsboat/posts as @neurathsboat gitlab.com user
- Change project visibility to public
- Create tag 1.0.0
- Mirror repository to Github
- Sync to Zenodo at https://zenodo.org/account/settings/github/
- Get the Zenodo DOI that will always automatically target the latest version by linking to the DOI link provided. It is usually the DOI shown except you need to subtract 1 from the last digit.
- Copy the obtained DOI into the appropriate variable of the header file, commit the change, and push the commit.
- Wait for CI pipeline in Gitlab to succeed
- Include post's repository as git submodule in gitlab.com/neurathsboat.blog/neurathsboat.blog under the directory content/post, making sure that the paths in `.gitmodules` are relative, like in this example:

```
[submodule "content/post/neuraths-boat"]
        path = content/post/neuraths-boat
        url = ../posts/neuraths-boat
        branch = master
```
- Add a pipeline trigger through a webhook in the post repository in gitlab.com