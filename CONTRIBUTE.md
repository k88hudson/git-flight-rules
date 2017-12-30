# Contributing

This is a community built document. Dive in and help out!

### Issues

- Please jump in and help us out by making PRs for open issues.
- If you see anything you'd think could be improved, feel free to open an issue. This doesn't just mean for new additions you'd like to see - although those are very appreciated, too.

### Pull Requests

- Please title your pull requests appropriately, summing up what your commits are about.
- Make sure that your submission doesn't exist somewhere else in the document.
- If you can, run `doctoc README.md` before adding a new section, or after editing a section - this keeps the Table of Contents up to date. If you don't have it, you can install [DocToc here](https://github.com/thlorenz/doctoc).
- Include the relevant branch before the `$` in a shell command, if needed. If not needed, please do not include a branch name.
- Please label code blocks as `sh` to help out [linguist](https://github.com/github/linguist), unless the language is different.
- Try and put relevant flight rules in the same general area of the document - deletes with deletes, commit amends with commit amends, and so on. We're working on making this better, so no worries if it is confusing - just throw the submission on the end.
- Link to places you found answers or procedures if especially complicated, or if linking to a larger discussion of how to do something. This normally means linking to Stack Overflow.
- Generally, conform to this schema:

        <a name="example-title"></a>
        # Example Title

        Brief description of the problem.

        ```sh
        (relevant branch)$ git blah blah
        ```

## Translation

We use a translation tool called [GitLocalize][gl]. Please follow these steps to get started with your contributions:

1. Go to [GitLocalize's k88hudson/git-flight-rules repository][gl-repo].
1. Sign up using your GitHub account :octocat:.
1. Find the document you are going to translate.
1. Happy translating :sparkles: .
1. When you are done, send the translation for reviews.
1. The reviewed translation will be sent as a Pull Request to GitHub by the language moderator in the community.

To learn more about how GitLocalize works, visit their [help page][gl-help]. If you find any issues or feature requests, please file them in [GitLocalize's issue tracker][gl-issue-tracker].

[gl]: https://gitlocalize.com
[gl-help]: https://docs.gitlocalize.com/
[gl-issue-tracker]: https://github.com/gitlocalize/feedback
[gl-repo]: https://gitlocalize.com/repo/598
