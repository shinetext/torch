## Front Page Content
Featured front page content. Edit `/content/_index.md` to change what appears here. Delete `/content/_index.md` if you don't want any content here.

In HTML Use
```
{{ with .Content }}
  <div class="well">
    {{.}}
  </div>
{{ end }}
```
