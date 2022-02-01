<?php

namespace App\Entity;

use App\Repository\VideoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: VideoRepository::class)]
class Video
{
    const VIDEO_ADDED_SUCCESSFULLY = 'VIDEO_ADDED_SUCCESSFULLY';
    const VIDEO_INVALID_FORM = 'VIDEO_INVALID_FORM';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[Assert\NotBlank]
    #[Assert\Length(min: 10)]
    #[ORM\Column(type: 'string', length: 100)]
    private $title;

    #[Assert\Length(min: 10)]
    #[ORM\Column(type: 'string', length: 2000, nullable: true)]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    private $thumbnail;

    #[ORM\ManyToOne(targetEntity: Visibility::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $visibility;

    #[Assert\File(maxSize: '4096k', mimeTypes: ['video/mp4'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $video;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(?string $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getVisibility(): ?Visibility
    {
        return $this->visibility;
    }

    public function setVisibility(?Visibility $visibility): self
    {
        $this->visibility = $visibility;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(string $video): self
    {
        $this->video = $video;

        return $this;
    }
}
